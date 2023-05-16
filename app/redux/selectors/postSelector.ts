import {RootState} from '../store';

export const getPostSelector = (state: RootState) =>
  state?.post?.postList || [];
export const getLoadingPostSelector = (state: RootState) =>
  state?.post?.loading || false;
