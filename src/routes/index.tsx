import { A } from "solid-start";
import {useI18n} from "~/i18n/useI18n";

export default function Home() {
  const i18n = useI18n();

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        {i18n.t('test')}
      </h1>
    </main>
  );
}
