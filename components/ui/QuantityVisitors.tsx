import Icon from "$store/components/ui/Icon.tsx";

function QuantityVisitors() {
  return (
    <div class="flex flex-row justify-center items-center dark:border-1 dark:border-white">
      <div class="flex col-start-1 bg-badge dark:bg-white w-14 h-10 rounded-l-lg dark:rounded-none justify-center items-center">
        <Icon
          id={"User"}
          width={20}
          height={20}
          strokeWidth={1}
          class="text-white dark:text-critical"
        />
      </div>
      <p class="w-full text-xs m-2 text-default dark:text-white">
        <span class="text-blue-600 dark:text-white font-bold">200</span>{" "}
        pessoas viram esse produto hoje!
      </p>
    </div>
  );
}

export default QuantityVisitors;
