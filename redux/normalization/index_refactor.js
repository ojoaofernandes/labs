const subjectsToHash = subjects => 
  Object.assign({}, ...(subjects.map(s => ({ [s.id]: s }))));

const flattenedSubjects = subjects =>
  Object.keys(subjects).map(i => subjects[i]);

const subjectsReducer = (state = {}, action = {}) => {
  if (action.type === 'LOAD_SUBJECTS_RESULT') {
    return {
      ...state,
      list: subjectsToHash(action.payload),
    };
  }

  if (action.type === 'EDIT_SUBJECT') {
    const { _id } = action.payload;
    const editingSubject = state.list[_id];
    const eligibleParents = flattenedSubjects(state.list)
      .filter(s => s._id !== _id && !(/`,${_id},`/.test(s.path)));

    let newSubjectParent;
    if (editingSubject.path === null) {
      newSubjectParent = null;
    } else {
      let hierarchy = editingSubject.path.split(',');
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
    const changedSubjects = subjectsToHash(action.payload.affectedSubjects);
    return {
      ...state,
      list: {
        ...state.list,
        ...changedSubjects,
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