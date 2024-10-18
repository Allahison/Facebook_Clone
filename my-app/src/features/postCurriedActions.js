// src/features/postCurriedActions.js
export const createPostDispatcher = (dispatch) => (content) => {
    if (content.trim()) {
      dispatch(addPost({ content, timestamp: new Date() }));
    }
  };
  