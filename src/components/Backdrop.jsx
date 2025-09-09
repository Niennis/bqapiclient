// import PacmanSpinner from "./PacmanSpinner";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function Backdrop({ open }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: open ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      {/* <PacmanSpinner size={64} color="#FFD84D" dotColor="#fff" dotCount={6} speed={0.4} /> */}
      <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="inherit" />
      </Stack>
    </div>
  );
}