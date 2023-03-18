import { Head } from "$fresh/runtime.ts";

export interface BlackFriday {
  enabled: boolean;
}

function ConfigSection(props: BlackFriday) {
  return (
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.isDark = ${props.enabled};
            document.documentElement.classList[window.isDark ? 'add' : 'remove']("dark");
            `,
        }}
      />
    </Head>
  );
}

export default ConfigSection;
