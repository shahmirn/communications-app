import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Conversations } from "./features/conversations/Conversations";
import { useGetConversationsFromAndByTypeQuery } from "./services/conversations";

export default function App() {
  const { data, error, isLoading } = useGetConversationsFromAndByTypeQuery({
    from: undefined,
    type: undefined,
  });

  console.dir(data);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Communications
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
          <Conversations />
        </Typography>
      </Box>
    </Box>
  );
}
