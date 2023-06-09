import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

import Newsletter from "./Newsletter.tsx";
export interface Props {
  institutional: {
    children: Array<{ label: string; href: string }>;
  };
  help: {
    children: Array<{ label: string; href: string }>;
  };
  about: {
    phone: string;
    email: string;
    openingHoursLine1: string;
    openingHoursLine2: string;
  };
  copyright: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
  };
}

function Footer({ institutional, help, about, copyright }: Props) {
  return (
    <footer class="w-full flex flex-col divide-y-1 divide-default">
      <div class="bg-gray-300 dark:bg-gray-900 dark:text-white flex flex-col justify-items-center">
        <Newsletter />
      </div>

      <div class="dark:bg-default-bf dark:text-white bg-gray-200 flex flex-col items-center justify-center">
        <div class="flex flex-col lg:flex-row lg:gap-20 gap-0 content-between w-full max-w-[1408px]">
          <div class="flex flex-col lg:m-8 m-4">
            <h1 class="text-badge font-extrabold text-sm dark:text-gray-400 mb-2">
              INSTITUCIONAL
            </h1>
            <ul>
              {institutional.children.map((item) => (
                <li key={item.label}>
                  <a class="text-sm tracking-wider" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div class="flex flex-col lg:m-8 m-4">
            <h1 class="text-badge font-extrabold text-sm mb-2 dark:text-gray-400">
              AJUDA
            </h1>
            <ul>
              {help.children.map((item) => (
                <li key={item.label}>
                  <a class="text-sm tracking-wider" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div class="flex flex-col lg:m-8 m-4">
            <h1 class="text-badge font-extrabold text-sm mb-2 dark:text-gray-400">
              SOBRE A LOJA ONLINE
            </h1>
            <ul>
              <li>
                <p class="font-bold text-sm inline-flex tracking-wider mr-2">
                  Telefone:
                </p>
                {about.phone}
              </li>
              <li>
                <p class="font-bold text-sm inline-flex tracking-wider mr-2">
                  Email:
                </p>
                {about.email}
              </li>
              <br />
              <li class="font-bold text-sm inline-flex tracking-wider">
                Horário de Funcionamento
              </li>
              <li>{about.openingHoursLine1}</li>
              <li>{about.openingHoursLine2}</li>
            </ul>
          </div>

          <div class="flex flex-col lg:m-3 m-4">
            <h1 class="text-badge font-extrabold mt-5 text-sm dark:text-gray-400">
              PAGUE COM
            </h1>
            <div class="flex flex-row gap-4 mt-2">
              <Icon
                id={"Elo"}
                width={30}
                height={20}
                strokeWidth={0.6}
              />
              <Icon
                id={"Visa"}
                width={30}
                height={20}
                strokeWidth={0.6}
              />
              <Icon
                id={"Mastercard"}
                width={30}
                height={20}
                strokeWidth={0.6}
              />
              <Icon
                id={"Pix"}
                width={30}
                height={20}
                strokeWidth={0.6}
              />
            </div>
          </div>
        </div>

        <div class="hidden md:flex py-12 bg-gray-100 dark:bg-default-bf flex-col items-center justify-center w-full">
          <div class="flex flex-col items-center justify-center w-full max-w-[1408px] gap-1">
            <ul class="text-center text-xs text-gray-400">
              <li>{copyright.line1}</li>
              <li>{copyright.line2}</li>
              <li>{copyright.line3}</li>
              <a href="#">{copyright.line4}</a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
