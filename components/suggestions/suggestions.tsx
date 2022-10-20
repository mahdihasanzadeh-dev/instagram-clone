import { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import { Suggestion } from '@components/suggestion/suggestion';
import type { ISuggestionsState } from './suggestions-interface';
import { suggestionsHelper } from './suggestions-helper';

export function Suggestions(): ReactElement {
  const [suggestions, setSuggestions] = useState<ISuggestionsState[]>([]);

  const helper = suggestionsHelper(setSuggestions);

  useEffect(() :void => {
    helper.setSuggestionsData();
  }, []);

  return (
    <div className="mt-4">
      <div className="flex justify-between text-sm mb-5">
        <h3 className=" text-sm font-semibold text-gray-400">Suggestions for you</h3>
        <button
          type="button"
          className="text-gray-600 font-semibold"
        >
          see all
        </button>
      </div>
      {
        suggestions.map((suggestion) => {
          const { userId, username, avatar, company } = suggestion;
          return (
            <Suggestion
              key={userId}
              userId={userId}
              username={username}
              avatar={avatar}
              company={company}
            />
          );
        })
      }
    </div>
  );
}
