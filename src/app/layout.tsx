import "./globals.css";
import { SidebarProvider, SidebarContent, SidebarFooter,  SidebarGroup, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

export const metadata = {
  title: "Sidebar Layout Example",
  description: "Sidebar + Content layout with shadcn/ui and next-themes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <AppSidebar />
            <main>
             <SidebarTrigger />
             {children}
           </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
