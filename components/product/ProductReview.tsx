import Container from "$store/components/ui/Container.tsx";

function ProductReview() {
  return (
    <Container class="py-20 flex flex-col items-center justify-center">
      <div class="flex flex-row gap-4 items-center justify-center w-full">
        <span class="hidden md:flex flex-1 w-full h-[2px] bg-gray-400" />
        <h3 class="uppercase text-6xl font-logo text-critical dark:text-white text-center">
          Resumo de avaliações
        </h3>
        <span class="hidden md:flex flex-1 w-full h-[2px] bg-gray-400" />
      </div>

      <p class="text-gray-500 text-xl mt-4 text-center">
        A Trustvox certifica que a nota média da empresa Olympikus é:
      </p>

      <span class="text-6xl font-bold flex flex-row items-end mt-4 text-default dark:text-white">
        4.6
        <span class="text-xl">/5</span>
      </span>

      <span class="uppercase text-sm text-default dark:text-gray-500">
        Nota da empresa
      </span>

      <span class="text-gray-500 font-bold text-xs mt-4">
        Baseado em 28550 avaliações
      </span>

      <p class="text-gray-700 mt-4 max-w-[450px] text-center">
        A empresa Olympikus se preocupa tanto com você consumidor que contratou
        uma empresa independente para auditar as avaliações. Legal, né? ;)
      </p>
    </Container>
  );
}

export default ProductReview;
