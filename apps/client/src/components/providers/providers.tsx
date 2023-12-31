import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { NavigationProgress } from "@mantine/nprogress";
import PageProvider from "./PageProvider";
import SocketProvider from "./SocketProvider";

interface Props {
    children: React.ReactNode;
}

export default function Providers(props: Props) {
    return (
        <MantineProvider forceColorScheme="dark" defaultColorScheme="dark">
            <PageProvider />
            <Notifications />
            <SocketProvider />
            <NavigationProgress />
            <ModalsProvider>{props.children}</ModalsProvider>
        </MantineProvider>
    );
}
