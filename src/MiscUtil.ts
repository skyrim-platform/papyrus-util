/*
==============================================
Typescript definitions for v4.2
==============================================

This file was automatically generated by Papyrus-2-Typescript.exe
https://github.com/CarlosLeyvaAyala/Papyrus-2-Typescript

The program has no way to know the intention of the humans that made
the scripts, so it's always advisable to manually check all generated
files to make sure everything is declared as it should.

Take note the program assumes this script exists in some subfolder
to the folder where `skyrimPlatform.ts` is found, otherwise you'll get
"Cannot find module..." type of errors.

If you want to have this script in some other place, just change the
relative path of each `import`.
*/

import * as sp from "skyrimPlatform"
import { Race } from "skyrimPlatform"
import { ObjectReference } from "skyrimPlatform"
import { Keyword } from "skyrimPlatform"
import { Key } from "skyrimPlatform"
import { Faction } from "skyrimPlatform"
import { Actor } from "skyrimPlatform"

const sn = (sp as any).MiscUtil

/** Cell scanning functions */

// Scans the current cell of the given CenterOn for an object of the given form type ID within radius and returns an array for all that
// and (optionally) also has the given keyword if changed from default none. Setting radius higher than 0.0 will restrict the 
// search distance from around CenterOn, 0.0 will search entire cell the object is in.
// NOTE: Keyword searches seem a little unpredictable so be sure to test if your usage of it works before using the results.
export const ScanCellObjects = (formType: number, CenterOn: ObjectReference | null | undefined, radius: number = 0.0, HasKeyword: Keyword | null | undefined = null): ObjectReference[] => sn.ScanCellObjects(formType,  CenterOn,  radius,  HasKeyword)


// Scans the current cell of the given CenterOn for an actor within the given radius and returns an array for all actors that are
// currently alive and (optionally) has the given keyword if changed from default none. Setting radius higher than 0.0 will restrict the 
// search distance from around CenterOn, 0.0 will search entire cell the object is in.
// NOTE: Keyword searches seem a little unpredictable so be sure to test if your usage of it works before using the results.
export const ScanCellNPCs = (CenterOn: ObjectReference | null | undefined, radius: number = 0.0, HasKeyword: Keyword | null | undefined = null, IgnoreDead: boolean = true): Actor[] => sn.ScanCellNPCs(CenterOn,  radius,  HasKeyword,  IgnoreDead)


// Same as ScanCellNPCs(), however it filters the return by a given faction and (optionally) their rank in that faction.
export const ScanCellNPCsByFaction = (FindFaction: Faction | null | undefined, CenterOn: ObjectReference | null | undefined, radius: number = 0.0, minRank: number = 0, maxRank: number = 127, IgnoreDead: boolean = true): Actor[] => sn.ScanCellNPCsByFaction(FindFaction,  CenterOn,  radius,  minRank,  maxRank,  IgnoreDead)


/** Camera functions */

// Toggle freefly camera.
export const ToggleFreeCamera = (stopTime: boolean = false): void => sn.ToggleFreeCamera(stopTime)
// Set freefly cam speed.
export const SetFreeCameraSpeed = (speed: number): void => sn.SetFreeCameraSpeed(speed)

// Set current freefly cam state & set the speed if enabling
export const SetFreeCameraState = (enable: boolean, speed: number = 10.0): void => sn.SetFreeCameraState(enable,  speed)

/** File related functions */

// Get an array of files in a given parent directory that have the given extension.
// directory is relative to the root Skyrim folder (where skyrim.exe is) and is non-recursive.
// directory = "." to get all files in root Skyrim folder
// directory = "data/meshes" to get all files in the <root>/data/meshes folder
// extension = ".nif" to get all .nif mesh files.
// (default) extension="*" to get all files
export const FilesInFolder = (directory: string, extension: string = "*"): string[] | null => sn.FilesInFolder(directory,  extension)

// Get an array of folders in a given parent directory
// Same rules and examples as above FilesInFolder apply to the directory rule here.
export const FoldersInFolder = (directory: string): string[] | null => sn.FoldersInFolder(directory)

// Check if a given file exists relative to root Skyrim directory. Example: FileExists("data/meshes/example.nif")
export const FileExists = (fileName: string): boolean => sn.FileExists(fileName)


// Read string from file. Do not read large files!
export const ReadFromFile = (fileName: string): string | null => sn.ReadFromFile(fileName)

// Write string to file.
export const WriteToFile = (fileName: string, text: string, append: boolean = true, timestamp: boolean = false): boolean => sn.WriteToFile(fileName,  text,  append,  timestamp)


/** Misc */

// Print text to console.
export const PrintConsole = (text: string): void => sn.PrintConsole(text)

// Get race's editor ID.
export const GetRaceEditorID = (raceForm: Race | null | undefined): string => sn.GetRaceEditorID(raceForm)

// Get race's editor ID.
export const GetActorRaceEditorID = (actorRef: Actor | null | undefined): string => sn.GetActorRaceEditorID(actorRef)

// Set HUD on / off - NOT CURRENT WORKING IN SKYRIM SPECIAL EDITION
export const SetMenus = (enabled: boolean): void => sn.SetMenus(enabled)



// Get node rotation
// REMOVED v2.9: Useless, only does a part of the job.
// float function GetNodeRotation(ObjectReference obj, string nodeName, bool firstPerson, int rotationIndex) global native
export const GetNodeRotation = (obj: ObjectReference | null | undefined, nodeName: string, firstPerson: boolean, rotationIndex: number): number => sn.GetNodeRotation(obj,  nodeName,  firstPerson,  rotationIndex)



// LEGACY v3.3 - Added Ignoredead parameter to function, aliased for backwards compatability with v3.2.
export const ScanCellActors = (CenterOn: ObjectReference | null | undefined, radius: number = 5000.0, HasKeyword: Keyword | null | undefined = null): Actor[] => sn.ScanCellActors(CenterOn,  radius,  HasKeyword)



