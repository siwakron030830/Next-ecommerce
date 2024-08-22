'use client'

import React from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import TooIbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NextLink from 'next/link'
import path from "path";

import { usePathname } from "next/navigation";
import Container from "@mui/material/Container";
export default function AppHeader() {
    const pathname = usePathname();
  return (
    <Container>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme)=> `1px solid ${theme.palette.divider}`}}
        >
          <Toolbar sx={{flexWrap: "wrap"}}>
        <Typography variant="h6" color="inherit" noWrap sx={{flexGrow: 1}}>
          IT SUPHAN SHOP
        </Typography>
        <nav>
            <Link 
            underline={pathname == "/" ? "always" : "none"}
            component={NextLink}
            variant="button"
            color="primary"
            href="/"
            replace
            sx={{my:1, mx: 1.5}}
            >
                Home
            </Link>

            <Link 
            underline={pathname == "/abount" ? "always" : "none"}
            component={NextLink}
            variant="button"
            color="primry"
            href="/abount"
            replace
            sx={{my:1, mx: 1.5}}
            >
                abount
            </Link>

            <Link 
            underline={pathname == "/Contact Us" ? "always" : "none"}
            component={NextLink}
            variant="button"
            color="primry"
            href="/Contact Us"
            replace
            sx={{my:1, mx: 1.5}}
            >
                Contact Us
            </Link>

            <Link 
            underline={pathname == "/product" ? "always" : "none"}
            component={NextLink}
            variant="button"
            color="primry"
            href="/product"
            replace
            sx={{my:1, mx: 1.5}}
            >
                product
            </Link>
        </nav>
        <Button 
        LinkComponent={NextLink}
        href="/login"
        variant="outlined"
        sx={{my:1, mx: 1.5}}
        >

        </Button>
        </Toolbar>
      </AppBar>
    </Container>
  );
}