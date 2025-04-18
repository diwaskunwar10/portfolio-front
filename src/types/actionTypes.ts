// Generic action types for API requests
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_FAILURE = 'API_FAILURE';

// Profile action types
export const FETCH_PROFILE_REQUEST = 'FETCH_PROFILE_REQUEST';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';

// GitHub action types
export const FETCH_GITHUB_PROFILE_REQUEST = 'FETCH_GITHUB_PROFILE_REQUEST';
export const FETCH_GITHUB_PROFILE_SUCCESS = 'FETCH_GITHUB_PROFILE_SUCCESS';
export const FETCH_GITHUB_PROFILE_FAILURE = 'FETCH_GITHUB_PROFILE_FAILURE';

export const FETCH_GITHUB_REPOS_REQUEST = 'FETCH_GITHUB_REPOS_REQUEST';
export const FETCH_GITHUB_REPOS_SUCCESS = 'FETCH_GITHUB_REPOS_SUCCESS';
export const FETCH_GITHUB_REPOS_FAILURE = 'FETCH_GITHUB_REPOS_FAILURE';

export const FETCH_GITHUB_CONTRIBUTIONS_REQUEST = 'FETCH_GITHUB_CONTRIBUTIONS_REQUEST';
export const FETCH_GITHUB_CONTRIBUTIONS_SUCCESS = 'FETCH_GITHUB_CONTRIBUTIONS_SUCCESS';
export const FETCH_GITHUB_CONTRIBUTIONS_FAILURE = 'FETCH_GITHUB_CONTRIBUTIONS_FAILURE';

// LinkedIn action types
export const FETCH_LINKEDIN_EXPERIENCE_REQUEST = 'FETCH_LINKEDIN_EXPERIENCE_REQUEST';
export const FETCH_LINKEDIN_EXPERIENCE_SUCCESS = 'FETCH_LINKEDIN_EXPERIENCE_SUCCESS';
export const FETCH_LINKEDIN_EXPERIENCE_FAILURE = 'FETCH_LINKEDIN_EXPERIENCE_FAILURE';

export const FETCH_LINKEDIN_EDUCATION_REQUEST = 'FETCH_LINKEDIN_EDUCATION_REQUEST';
export const FETCH_LINKEDIN_EDUCATION_SUCCESS = 'FETCH_LINKEDIN_EDUCATION_SUCCESS';
export const FETCH_LINKEDIN_EDUCATION_FAILURE = 'FETCH_LINKEDIN_EDUCATION_FAILURE';

export const FETCH_LINKEDIN_CERTIFICATES_REQUEST = 'FETCH_LINKEDIN_CERTIFICATES_REQUEST';
export const FETCH_LINKEDIN_CERTIFICATES_SUCCESS = 'FETCH_LINKEDIN_CERTIFICATES_SUCCESS';
export const FETCH_LINKEDIN_CERTIFICATES_FAILURE = 'FETCH_LINKEDIN_CERTIFICATES_FAILURE';

export const FETCH_LINKEDIN_SKILLS_REQUEST = 'FETCH_LINKEDIN_SKILLS_REQUEST';
export const FETCH_LINKEDIN_SKILLS_SUCCESS = 'FETCH_LINKEDIN_SKILLS_SUCCESS';
export const FETCH_LINKEDIN_SKILLS_FAILURE = 'FETCH_LINKEDIN_SKILLS_FAILURE';

// Action interfaces
export interface ApiAction<T = any> {
  type: string;
  payload?: T;
  error?: any;
  meta?: any;
}

// Action creator types
export type ActionCreator<T = any> = (payload?: T) => ApiAction<T>;
