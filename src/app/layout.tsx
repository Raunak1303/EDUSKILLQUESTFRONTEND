import RootLayoutServer from "./RootLayoutServer";
import RootLayoutClient from "./RootLayoutClient";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayoutServer>
      <RootLayoutClient>
        {children}
      </RootLayoutClient>
    </RootLayoutServer>
  );
}
