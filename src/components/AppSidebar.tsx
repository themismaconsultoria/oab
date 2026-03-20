import { Home, Crosshair, Search, BarChart3, Scale, BookOpen } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Início", url: "/", icon: Home },
  { title: "Simulado Real", url: "/simulado", icon: Crosshair },
  { title: "Buscador", url: "/buscador", icon: Search },
  { title: "Radar de Recorrência", url: "/radar", icon: BarChart3 },
  { title: "Veredito e Predição", url: "/predicao", icon: Scale },
  { title: "Vademecum Online", url: "https://www4.planalto.gov.br/legislacao/", icon: BookOpen, external: true },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent className="pt-6">
        <div className="px-4 mb-8">
          {!collapsed ? (
            <div className="flex items-center gap-2">
              <Scale className="h-7 w-7 text-primary" />
              <div>
                <h2 className="text-lg font-bold text-foreground tracking-tight">JurisVision</h2>
                <p className="text-[10px] text-muted-foreground tracking-widest uppercase">OAB Prep</p>
              </div>
            </div>
          ) : (
            <Scale className="h-7 w-7 text-primary mx-auto" />
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {item.external ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200"
                      >
                        <item.icon className="h-4 w-4 shrink-0" />
                        {!collapsed && <span className="text-sm">{item.title}</span>}
                      </a>
                    ) : (
                      <NavLink
                        to={item.url}
                        end={item.url === "/"}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200"
                        activeClassName="bg-primary/10 text-primary font-medium border border-primary/20"
                      >
                        <item.icon className="h-4 w-4 shrink-0" />
                        {!collapsed && <span className="text-sm">{item.title}</span>}
                      </NavLink>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
