import {
  styled,
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

const StyleAppbar = styled(MuiAppBar, {
  name: "Navigation",
  slot: "Root",
})({});

const Navigation: React.FC = () => {
  return (
    <>
      <StyleAppbar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </StyleAppbar>
    </>
  );
};

export default Navigation;
