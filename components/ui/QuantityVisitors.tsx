import Icon from "$store/components/ui/Icon.tsx";

function QuantityVisitors() {
  return (
    <div class="flex flex-row justify-center items-center">
      <div class="flex col-start-1 bg-blue-700 w-14 h-10 rounded-l-lg justify-center items-center">
        <Icon
          id={"User"}
          width={20}
          height={20}
          strokeWidth={1}
          class="text-white"
        />
      </div>
      <p class="w-full text-xs m-2">
        <span class="text-blue-600 font-bold">200</span>{" "}
        pessoas viram esse produto hoje!
      </p>
    </div>
  );
}

export default QuantityVisitors;
