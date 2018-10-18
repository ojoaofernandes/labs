const stackSubjects = subjects => 
  subjects.map(subject => {
    const regex = new RegExp(`,${subject._id},`);

    subject.children = [];
    subject.children.push(...subjects.filter(s => regex.test(s.path)));

    return subject;
  });

const getTopLevelSubjects = subjects => 
  subjects.filter(subject => subject.path === null);

const stackAndGetTopLevelSubjects = subjects => 
  getTopLevelSubjects(stackSubjects(subjects));

function *flattenedSubjects(subjects) {
  for (let subject of subjects) {
    yield subject;

    if (subject.children.length) {
      yield* flattenedSubjects(subject.children);
    }
  }
};

const subjectsReducer = (state = {}, action = {}) => {
  if (action.type === 'LOAD_SUBJECTS_RESULT') {
    return {
      ...state,
      list: stackAndGetTopLevelSubjects(action.payload)
    };
  }

  if (action.type === 'EDIT_SUBJECT') {
    const editingSubject = {
      ...[...flattenedSubjects(state.list)].find(s => s._id === action.payload._id)
    };

    const eligibleParents = [...flattenedSubjects(state.list)]
      .filter(s => s._id !== action.payload._id && !(/`,${action.payload._id},`/.test(s.path)));

    let newSubjectParent;
    if (editingSubject.path === null) {
      newSubjectParent = null;
    } else {
      const hierarchy = editingSubject.path.split(',');
      newSubjectParent = hierarchy[hierarchy.length - 2];
    }

    return {
      ...state,
      editSubjectsPacket: {
        ...state.editSubjectsPacket,
        newSubjectName: editingSubject.name,
        newSubjectParent,
        editingSubject,
        eligibleParents,
      }
    };
  }

  if (action.type === 'UPDATE_SUBJECT_RESULTS') {
    const { 
      _id,
      existingParent,
      newParent,
      affectedSubjects,
    } = action.payload;

    if (existingParent === newParent) {
      const existingSubjects = [...flattenedSubjects(state.list)];
      const tweakedSubjects = existingSubjects.map(s => 
        s._id === _id ? { ...s, name: newName } : s
      );

      return {
        ...state,
        list: stackAndGetTopLevelSubjects(tweakedSubjects),
      }
    } else {
      const existingSubjects = [...flattenedSubjects(state.list)];
      const affectedIds = affectedSubjects.map(s => '' + s._id);
      const tweakedSubjects = existingSubjects.map(s => s).filter(s => affectedIds.indexOf('' + s._id) === -1);

      return {
        ...state,
        list: stackAndGetTopLevelSubjects(tweakedSubjects.concat(affectedSubjects)),
      }
    }
  }

  return state;
}

const store = Redux.createStore(subjectsReducer);

const subjects = [
  { _id: 0, name: 'Programming', path: null },
  { _id: 1, name: 'JavaScript', path: ',0,' },
  { _id: 2, name: 'Ruby', path: ',0,' },
  { _id: 3, name: 'History', path: null },
  { _id: 4, name: 'American History', path: ',3,' },
];

store.dispatch({ 'type': 'LOAD_SUBJECTS_RESULT', payload: subjects });

store.dispatch({ 
  'type': 'EDIT_SUBJECT', 
  payload: { _id: 2, name: 'Ruby', path: ',0,' },
});

store.dispatch({
  type: 'UPDATE_SUBJECTS_RESULT',
  payload: {
    _id: 2,
    existingParent: 'Programming',
    newParent: 'History',
    
  },
});

console.log(store.getState());