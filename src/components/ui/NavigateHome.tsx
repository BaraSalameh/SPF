'use client'

import { NavButton } from "@/components/ui"
import { Home } from "lucide-react"
import { useNavigator } from "../features/hooks/useNavigator"

export const NavigateHome = () =>
    <NavButton navigateTo="home" icon={Home} label={useNavigator().home} />
