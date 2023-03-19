import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";

interface Props {
  searchbar: SearchbarProps;
}

export default function HeaderSearch({ searchbar }: Props) {
  return (
    <div class="flex flex-row w-full items-center bg-gray-200 dark:bg-gray-700 lg:w-auto dark:lg:bg-transparent lg:bg-transparent lg:border-b-2 lg:border-critical dark:lg:border-white p-2 lg:p-0 lg:pb-1 relative group">
      <input
        role="combobox"
        id="search-input"
        autocomplete="off"
        aria-controls="search-suggestion"
        placeholder={searchbar.placeholder}
        class="flex-grow outline-none bg-transparent font-bold uppercase text-[10px] text-critical dark:text-white placeholder-critical dark:placeholder-white w-[180px]"
      />

      <Icon
        width={16}
        height={16}
        strokeWidth={0.4}
        id="MagnifyingGlass"
        class="text-critical dark:text-white"
      />

      {searchbar.suggestions?.searches && (
        <div class="hidden lg:group-hover:block absolute bg-default p-4 border-1 border-default rounded top-[100%] lg:mt-[2px] w-full left-0">
          <Text variant="bold" class="uppercase text-xs">
            Mais buscados
          </Text>

          <ul class="flex flex-col mt-2 gap-2">
            {searchbar.suggestions.searches.map((search, i) => {
              return (
                <li>
                  <a href={`/s?q=${search.term}`} class="flex flex-row text-sm">
                    <span class="w-[24px] h-[24px] bg-gray-300 text-xs flex items-center justify-center mr-3">
                      {i + 1}
                    </span>

                    {search.term}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
