// @refresh reload
import {Suspense} from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
import {RosettyProvider} from "rosetty-solid";
import fr from 'dayjs/locale/fr';
import {frI18n} from "./i18n/fr";

const locales={fr: {dict: frI18n,locale: fr}};

export default function Root() {

  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <RosettyProvider languages={locales} defaultLanguage={'fr'}>
          <Suspense>
            <ErrorBoundary>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
          <Scripts />
        </RosettyProvider>
      </Body>
    </Html>
  );
}
