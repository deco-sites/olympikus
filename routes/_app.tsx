import { AppProps } from "$fresh/server.ts";
import { context } from "$live/live.ts";
import GlobalTags from "$store/components/GlobalTags.tsx";
import GoogleTagManager from "partytown/integrations/GTM.tsx";

const trackingId = "";

function App(props: AppProps) {
  return (
    <>
      {/* Include fonts, icons and more */}
      <GlobalTags />

      {/* Add Tag Manager script during production only. To test it locally remove the condition */}
      {!!context.deploymentId && trackingId && (
        <GoogleTagManager trackingId={trackingId} />
      )}

      <main class="bg-default dark:bg-black">
        {/* Rest of Preact tree */}
        <props.Component />
      </main>
    </>
  );
}

export default App;
