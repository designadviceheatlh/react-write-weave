import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold">404</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-xl text-muted-foreground">
            Oops! Page not found
          </p>
          <Button asChild variant="default" className="gap-2">
            <a href="/">
              <Home className="w-4 h-4" />
              Return to Home
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;