import type { IStoriesState } from '@components/stories/stories-interface';

export interface ISuggestionsState extends IStoriesState {
    company: string;
}
