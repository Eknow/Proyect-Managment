import React, { useState } from "react";
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../state";
import {
    AppBar,
    useTheme,
    Toolbar,
    IconButton,
    InputBase,
    Button,
    Box,
    Typography,
    Menu,
    MenuItem,
    useMediaQuery,
} from "@mui/material";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, user }) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const navigate = useNavigate();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const handleLogout = () => {
        localStorage.removeItem("DashBoardUser");
        localStorage.removeItem("DashBoardUserLoggedIn");
        navigate("/");
    };

    const handleShowPorfile = () => {
        navigate(`/profile/${userObj.id}`);
    };

    const users = localStorage.getItem("DashBoardUser");
    console.log(users);
    const userObj = JSON.parse(users);

    return (
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none",
            }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* LEFT SIDE */}
                <FlexBetween>
                    <IconButton
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <MenuIcon />
                    </IconButton>
                    {isNonMediumScreens && (
                        <FlexBetween
                            backgroundColor={theme.palette.background.alt}
                            borderRadius="9px"
                            gap="3rem"
                            p="0.1rem 1.5rem">
                            <InputBase placeholder="Search..." />
                            <IconButton>
                                <Search />
                            </IconButton>
                        </FlexBetween>
                    )}
                </FlexBetween>
                {/* RIGHT SIDE */}

                <FlexBetween gap="1.5rem">
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode == "dark" ? (
                            <DarkModeOutlined sx={{ fontSize: "25px" }} />
                        ) : (
                            <LightModeOutlined sx={{ fontSize: "25px" }} />
                        )}
                    </IconButton>
                    <IconButton>
                        <AssignmentIndOutlinedIcon
                            sx={{ fontSize: "25px" }}
                            onClick={handleShowPorfile}
                        />
                    </IconButton>
                    <FlexBetween>
                        <Button
                            onClick={handleClick}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                textTransform: "none",
                                gap: "1rem",
                            }}>
                            <Box
                                component="img"
                                alt="profile"
                                src={userObj.imageUrl}
                                height="32px"
                                width="32px"
                                borderRadius="50%"
                                sx={{ objectFit: "cover" }}
                            />
                            <Box textAlign="left">
                                <Typography
                                    fontWeight="bold"
                                    fontSize="0.85rem"
                                    sx={{
                                        color: theme.palette.secondary[100],
                                    }}>
                                    {userObj.name}
                                </Typography>
                                <Typography
                                    fontSize="0.75rem"
                                    sx={{
                                        color: theme.palette.secondary[200],
                                    }}>
                                    {userObj.email}
                                </Typography>
                            </Box>
                            <ArrowDropDownOutlined
                                sx={{
                                    color: theme.palette.secondary[300],
                                    fontSize: "25px",
                                }}
                            />
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={isOpen}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}>
                            <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                        </Menu>
                    </FlexBetween>
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
