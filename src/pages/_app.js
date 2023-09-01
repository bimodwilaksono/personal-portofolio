import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }) {
    return (
        <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here light or dark theme */
          colorScheme: 'light',
        }}
        >
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MantineProvider>
    );
}
