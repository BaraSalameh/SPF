'use client'

import { NavButton } from "@/components/ui"
import { Home } from "lucide-react"
import { useNavigator } from "../hooks/useNavigator";

export const Navigator = () =>
    <NavButton navigateTo="home" icon={Home} label={useNavigator().home} />
