import type { ISetState } from '@common/common-interface';
import { faker } from '@faker-js/faker';
import type { ISuggestionsState } from './suggestions-interface';

export function suggestionsHelper(setSuggestions: ISetState<ISuggestionsState[]>) {
  function setSuggestionsData() {
    setSuggestions([...Array(5)].map(() => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      company: faker.company.companyName(),
    })));
  }

  return {
    setSuggestionsData,
  };
}
