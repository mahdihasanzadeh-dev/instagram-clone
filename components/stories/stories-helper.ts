import { faker } from '@faker-js/faker';
import type { ISetState } from '@common/common-interface';
import type { IStoriesState } from './stories-interface';

export function storiesHelper(setStories:ISetState<IStoriesState[]>) {
  function setStoriesData() {
    setStories([...Array(30)].map(() => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
    })));
  }

  return {
    setStoriesData,
  };
}
