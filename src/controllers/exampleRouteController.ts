// Import express and express types
import express, { Request, Response } from "express";

// Import relevant models here

// Create methods for route handling (Will be called when the route is accessed)
exports.index = (req: Request, res: Response) => {
    res.send("Arrived at new route");
}