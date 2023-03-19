import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col sm:flex-row gap-6 sm:gap-20 m-5 self-center">
      <div class="flex flex-row gap-2 max-w-[400px] self-center">
        <Text
          variant="heading-2"
          tone="default-inverse"
          class="text-gray-600 font-extrabold"
        >
          NEWSLETTER
        </Text>
      </div>
      <div class="flex flex-row gap-2 max-w-[300px] self-center">
        <Text
          variant="heading-3"
          tone="default-inverse"
          class="text-xs text-gray-600 text-left"
        >
          Inscreva-se em nossa newsletter para receber ofertas e novidades
          exclusivas sobre os produtos Olympikus.
        </Text>
      </div>
      <form class="flex flex-row items-center gap-2 font-body text-body w-full sm:w-[408px]">
        <input
          class="py-2 px-3 flex-grow-1 bg-white text-default-inverse border-1 border-default"
          placeholder="Digite aqui seu e-mail"
        />
        <button
          class="py-2 px-3 bg-black text-white flex-grow-0"
          type="bgutton" // prevent form's default behavior
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
