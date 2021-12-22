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
import { ObjectReference } from "skyrimPlatform"
import { Form } from "skyrimPlatform"
import { Alias } from "skyrimPlatform"
import { Actor } from "skyrimPlatform"

const sn = (sp as any).PapyrusUtil

// Get version of papyrus DLL library. Version 4.1 will return 41.
export const GetVersion = (): number => sn.GetVersion()

// Get version of compiled papyrus scripts which should match return from GetVersion()
export const GetScriptVersion = (): number => sn.GetScriptVersion()

// ##
// ## Array manipulation utilities
// ##

// Few extra array types not provided by SKSE normally to help avoid having to use and cast Form arrays
export const ActorArray = (size: number, filler: Actor | null | undefined = null): Actor[] => sn.ActorArray(size,  filler)
export const ResizeActorArray = (ArrayValues: Actor[], toSize: number, filler: Actor | null | undefined = null): Actor[] => sn.ResizeActorArray(ArrayValues,  toSize,  filler)
export const ObjRefArray = (size: number, filler: ObjectReference | null | undefined = null): ObjectReference[] => sn.ObjRefArray(size,  filler)
export const ResizeObjRefArray = (ArrayValues: ObjectReference[], toSize: number, filler: ObjectReference | null | undefined = null): ObjectReference[] => sn.ResizeObjRefArray(ArrayValues,  toSize,  filler)

// ## Append a value to the end of the given array and return the new array.
// ## NOTE: The array has to be recreated each time you call this. For the sake of memory usage and performance, DO NOT use these to build up an array through a loop,
// ##       in such a situation it is significantly faster to create the full length array first and then fill it. Best to limit to only the occasional need.
export const PushFloat = (ArrayValues: number[], push: number): number[] => sn.PushFloat(ArrayValues,  push)
export const PushInt = (ArrayValues: number[], push: number): number[] => sn.PushInt(ArrayValues,  push)
// bool[] function PushBool(bool[] ArrayValues, bool push) global native // // Bugged - Non-native version available below
export const PushString = (ArrayValues: string[], push: string): string[] => sn.PushString(ArrayValues,  push)
export const PushForm = (ArrayValues: Form[], push: Form | null | undefined): Form[] => sn.PushForm(ArrayValues,  push)
export const PushAlias = (ArrayValues: Alias[], push: Alias | null | undefined): Alias[] => sn.PushAlias(ArrayValues,  push)
export const PushActor = (ArrayValues: Actor[], push: Actor | null | undefined): Actor[] => sn.PushActor(ArrayValues,  push)
export const PushObjRef = (ArrayValues: ObjectReference[], push: ObjectReference | null | undefined): ObjectReference[] => sn.PushObjRef(ArrayValues,  push)

// ## Removes all elements from the given array matching the provided value and returns the shortened array.
export const RemoveFloat = (ArrayValues: number[], ToRemove: number): number[] => sn.RemoveFloat(ArrayValues,  ToRemove)
export const RemoveInt = (ArrayValues: number[], ToRemove: number): number[] => sn.RemoveInt(ArrayValues,  ToRemove)
// bool[] function RemoveBool(bool[] ArrayValues, bool ToRemove) global native // // Bugged - Non-native version available below
export const RemoveString = (ArrayValues: string[], ToRemove: string): string[] => sn.RemoveString(ArrayValues,  ToRemove)
export const RemoveForm = (ArrayValues: Form[], ToRemove: Form | null | undefined): Form[] => sn.RemoveForm(ArrayValues,  ToRemove)
export const RemoveAlias = (ArrayValues: Alias[], ToRemove: Alias | null | undefined): Alias[] => sn.RemoveAlias(ArrayValues,  ToRemove)
export const RemoveActor = (ArrayValues: Actor[], ToRemove: Actor | null | undefined): Actor[] => sn.RemoveActor(ArrayValues,  ToRemove)
export const RemoveObjRef = (ArrayValues: ObjectReference[], ToRemove: ObjectReference | null | undefined): ObjectReference[] => sn.RemoveObjRef(ArrayValues,  ToRemove)

// ## Removes all duplicate elements from the given array and returns the shortened array with only a single instance of all element values.
export const RemoveDupeFloat = (ArrayValues: number[]): number[] => sn.RemoveDupeFloat(ArrayValues)
export const RemoveDupeInt = (ArrayValues: number[]): number[] => sn.RemoveDupeInt(ArrayValues)
export const RemoveDupeString = (ArrayValues: string[]): string[] => sn.RemoveDupeString(ArrayValues)
export const RemoveDupeForm = (ArrayValues: Form[]): Form[] => sn.RemoveDupeForm(ArrayValues)
export const RemoveDupeAlias = (ArrayValues: Alias[]): Alias[] => sn.RemoveDupeAlias(ArrayValues)
export const RemoveDupeActor = (ArrayValues: Actor[]): Actor[] => sn.RemoveDupeActor(ArrayValues)
export const RemoveDupeObjRef = (ArrayValues: ObjectReference[]): ObjectReference[] => sn.RemoveDupeObjRef(ArrayValues)

// ## Get an array of values from ArrayValues1 that ARE NOT among the values of ArrayValues2. Duplicates are removed by default.
// ## Setting CompareBoth = true will change the behavior to also include the reverse comparison of ArrayValues2 values that are not present in ArrayValues1.
// ## Setting IncludeDupes = true will allow the resulting array to include duplicate entries of the same value if they were also duplicated in the input arrays.
export const GetDiffFloat = (ArrayValues1: number[], ArrayValues2: number[], CompareBoth: boolean = false, IncludeDupes: boolean = false): number[] => sn.GetDiffFloat(ArrayValues1,  ArrayValues2,  CompareBoth,  IncludeDupes)
export const GetDiffInt = (ArrayValues1: number[], ArrayValues2: number[], CompareBoth: boolean = false, IncludeDupes: boolean = false): number[] => sn.GetDiffInt(ArrayValues1,  ArrayValues2,  CompareBoth,  IncludeDupes)
export const GetDiffString = (ArrayValues1: string[], ArrayValues2: string[], CompareBoth: boolean = false, IncludeDupes: boolean = false): string[] => sn.GetDiffString(ArrayValues1,  ArrayValues2,  CompareBoth,  IncludeDupes)
export const GetDiffForm = (ArrayValues1: Form[], ArrayValues2: Form[], CompareBoth: boolean = false, IncludeDupes: boolean = false): Form[] => sn.GetDiffForm(ArrayValues1,  ArrayValues2,  CompareBoth,  IncludeDupes)
export const GetDiffAlias = (ArrayValues1: Alias[], ArrayValues2: Alias[], CompareBoth: boolean = false, IncludeDupes: boolean = false): Alias[] => sn.GetDiffAlias(ArrayValues1,  ArrayValues2,  CompareBoth,  IncludeDupes)
export const GetDiffActor = (ArrayValues1: Actor[], ArrayValues2: Actor[], CompareBoth: boolean = false, IncludeDupes: boolean = false): Actor[] => sn.GetDiffActor(ArrayValues1,  ArrayValues2,  CompareBoth,  IncludeDupes)
export const GetDiffObjRef = (ArrayValues1: ObjectReference[], ArrayValues2: ObjectReference[], CompareBoth: boolean = false, IncludeDupes: boolean = false): ObjectReference[] => sn.GetDiffObjRef(ArrayValues1,  ArrayValues2,  CompareBoth,  IncludeDupes)

// ## Get an array of values that are present in both ArrayValues1 and ArrayValues2.
export const GetMatchingFloat = (ArrayValues1: number[], ArrayValues2: number[]): number[] => sn.GetMatchingFloat(ArrayValues1,  ArrayValues2)
export const GetMatchingInt = (ArrayValues1: number[], ArrayValues2: number[]): number[] => sn.GetMatchingInt(ArrayValues1,  ArrayValues2)
export const GetMatchingString = (ArrayValues1: string[], ArrayValues2: string[]): string[] => sn.GetMatchingString(ArrayValues1,  ArrayValues2)
export const GetMatchingForm = (ArrayValues1: Form[], ArrayValues2: Form[]): Form[] => sn.GetMatchingForm(ArrayValues1,  ArrayValues2)
export const GetMatchingAlias = (ArrayValues1: Alias[], ArrayValues2: Alias[]): Alias[] => sn.GetMatchingAlias(ArrayValues1,  ArrayValues2)
export const GetMatchingActor = (ArrayValues1: Actor[], ArrayValues2: Actor[]): Actor[] => sn.GetMatchingActor(ArrayValues1,  ArrayValues2)
export const GetMatchingObjRef = (ArrayValues1: ObjectReference[], ArrayValues2: ObjectReference[]): ObjectReference[] => sn.GetMatchingObjRef(ArrayValues1,  ArrayValues2)

// ## Returns the number of instances an array has an element equal to the given value
export const CountFloat = (ArrayValues: number[], EqualTo: number): number => sn.CountFloat(ArrayValues,  EqualTo)
export const CountInt = (ArrayValues: number[], EqualTo: number): number => sn.CountInt(ArrayValues,  EqualTo)
export const CountBool = (ArrayValues: boolean[], EqualTo: boolean): number => sn.CountBool(ArrayValues,  EqualTo)
export const CountString = (ArrayValues: string[], EqualTo: string): number => sn.CountString(ArrayValues,  EqualTo)
export const CountForm = (ArrayValues: Form[], EqualTo: Form | null | undefined): number => sn.CountForm(ArrayValues,  EqualTo)
export const CountAlias = (ArrayValues: Alias[], EqualTo: Alias | null | undefined): number => sn.CountAlias(ArrayValues,  EqualTo)
export const CountActor = (ArrayValues: Actor[], EqualTo: Actor | null | undefined): number => sn.CountActor(ArrayValues,  EqualTo)
export const CountObjRef = (ArrayValues: ObjectReference[], EqualTo: ObjectReference | null | undefined): number => sn.CountObjRef(ArrayValues,  EqualTo)

// ## Returns two arrays combined into one, optionally also removing any duplicate occurrences of a value.
export const MergeFloatArray = (ArrayValues1: number[], ArrayValues2: number[], RemoveDupes: boolean = false): number[] => sn.MergeFloatArray(ArrayValues1,  ArrayValues2,  RemoveDupes)
export const MergeIntArray = (ArrayValues1: number[], ArrayValues2: number[], RemoveDupes: boolean = false): number[] => sn.MergeIntArray(ArrayValues1,  ArrayValues2,  RemoveDupes)
// bool[] function MergeBoolArray(bool[] ArrayValues1, bool[] ArrayValues2, bool RemoveDupes = false) global native // // Bugged - Non-native version available below
export const MergeStringArray = (ArrayValues1: string[], ArrayValues2: string[], RemoveDupes: boolean = false): string[] => sn.MergeStringArray(ArrayValues1,  ArrayValues2,  RemoveDupes)
export const MergeFormArray = (ArrayValues1: Form[], ArrayValues2: Form[], RemoveDupes: boolean = false): Form[] => sn.MergeFormArray(ArrayValues1,  ArrayValues2,  RemoveDupes)
export const MergeAliasArray = (ArrayValues1: Alias[], ArrayValues2: Alias[], RemoveDupes: boolean = false): Alias[] => sn.MergeAliasArray(ArrayValues1,  ArrayValues2,  RemoveDupes)
export const MergeActorArray = (ArrayValues1: Actor[], ArrayValues2: Actor[], RemoveDupes: boolean = false): Actor[] => sn.MergeActorArray(ArrayValues1,  ArrayValues2,  RemoveDupes)
export const MergeObjRefArray = (ArrayValues1: ObjectReference[], ArrayValues2: ObjectReference[], RemoveDupes: boolean = false): ObjectReference[] => sn.MergeObjRefArray(ArrayValues1,  ArrayValues2,  RemoveDupes)

// ## Returns a sub section of an array indicated by a starting and ending index.
// ## The default argument "int EndIndex = -1" clamps the to the end of the array. Equivalent of setting EndIndex = (ArrayValues.Length - 1)
export const SliceFloatArray = (ArrayValues: number[], StartIndex: number, EndIndex: number = -1): number[] => sn.SliceFloatArray(ArrayValues,  StartIndex,  EndIndex)
export const SliceIntArray = (ArrayValues: number[], StartIndex: number, EndIndex: number = -1): number[] => sn.SliceIntArray(ArrayValues,  StartIndex,  EndIndex)
// bool[] function SliceBoolArray(bool[] ArrayValues, int StartIndex, int EndIndex = -1) global native // // Bugged - Non-native version available below
export const SliceStringArray = (ArrayValues: string[], StartIndex: number, EndIndex: number = -1): string[] => sn.SliceStringArray(ArrayValues,  StartIndex,  EndIndex)
export const SliceFormArray = (ArrayValues: Form[], StartIndex: number, EndIndex: number = -1): Form[] => sn.SliceFormArray(ArrayValues,  StartIndex,  EndIndex)
export const SliceAliasArray = (ArrayValues: Alias[], StartIndex: number, EndIndex: number = -1): Alias[] => sn.SliceAliasArray(ArrayValues,  StartIndex,  EndIndex)
export const SliceActorArray = (ArrayValues: Actor[], StartIndex: number, EndIndex: number = -1): Actor[] => sn.SliceActorArray(ArrayValues,  StartIndex,  EndIndex)
export const SliceObjRefArray = (ArrayValues: ObjectReference[], StartIndex: number, EndIndex: number = -1): ObjectReference[] => sn.SliceObjRefArray(ArrayValues,  StartIndex,  EndIndex)


// ## Sorts a given array's elements alphanumerically. Sorted in ascending order by default.
export const SortIntArray = (ArrayValues: number[], descending: boolean = false): void => sn.SortIntArray(ArrayValues,  descending)
export const SortFloatArray = (ArrayValues: number[], descending: boolean = false): void => sn.SortFloatArray(ArrayValues,  descending)
export const SortStringArray = (ArrayValues: string[], descending: boolean = false): void => sn.SortStringArray(ArrayValues,  descending)

// ##
// ## Shortcuts for common usage
// ##

export const ClearEmpty = (ArrayValues: string[]): string[] => sn.ClearEmpty(ArrayValues)
export const ClearNone = (ArrayValues: Form[]): Form[] => sn.ClearNone(ArrayValues)

export const CountFalse = (ArrayValues: boolean[]): number => sn.CountFalse(ArrayValues)
export const CountTrue = (ArrayValues: boolean[]): number => sn.CountTrue(ArrayValues)
export const CountNone = (ArrayValues: Form[]): number => sn.CountNone(ArrayValues)

// ##
// ## Extra String Utilities
// ##

// ## Similar to SKSE's native StringUtil.Split() except results are whitespace trimmed. So comma, separated,list,can, be, spaced,or,not.
export const StringSplit = (ArgString: string, Delimiter = ","): string[] => sn.StringSplit(ArgString,  Delimiter)

// ## Opposite of StringSplit()
export const StringJoin = (Values: string[], Delimiter = ","): string => sn.StringJoin(Values,  Delimiter)

// ##
// ## Shortcuts for some common number actions. Mostly to help cut some basic and overly verbose checks down to a single line.
// ## Making these native instead of normal globals is probably massive overkill, but why not...
// ##

// ## Return the total sum of all values stored in the given array
export const AddIntValues = (Values: number[]): number => sn.AddIntValues(Values)
export const AddFloatValues = (Values: number[]): number => sn.AddFloatValues(Values)

// ## Returns the value clamped to the min or max when out of range
export const ClampInt = (value: number, min: number, max: number): number => sn.ClampInt(value,  min,  max)
export const ClampFloat = (value: number, min: number, max: number): number => sn.ClampFloat(value,  min,  max)

// ## Similar to the clamp functions, only values wrap around to the other side of range instead.
// ## Mostly useful for traversing around array values by wrapping the index from end to end without having to check for it being out of range first.
// ##     i.e.: Form var = myFormArray[WrapInt(i, (myFormArray.Length - 1))]
export const WrapInt = (value: number, end: number, start: number = 0): number => sn.WrapInt(value,  end,  start)
export const WrapFloat = (value: number, end: number, start: number = 0.0): number => sn.WrapFloat(value,  end,  start)

// ## Returns the given value signed if bool is true, unsigned if false, regardless if value started out signed or not. 
export const SignInt = (doSign: boolean, value: number): number => sn.SignInt(doSign,  value)
export const SignFloat = (doSign: boolean, value: number): number => sn.SignFloat(doSign,  value)

// ##
// ## Non-Native bool versions of some functions where SKSE version is bugged.
// ## SKSE version VMResultArray<bool> fails to be manipulated by other native functions past creation.
// ##

export const ResizeBoolArray = (ArrayValues: boolean[], toSize: number, filler: boolean = false): boolean[] => sn.ResizeBoolArray(ArrayValues,  toSize,  filler)

export const PushBool = (ArrayValues: boolean[], push: boolean): boolean[] => sn.PushBool(ArrayValues,  push)

export const RemoveBool = (ArrayValues: boolean[], ToRemove: boolean): boolean[] => sn.RemoveBool(ArrayValues,  ToRemove)

export const MergeBoolArray = (ArrayValues1: boolean[], ArrayValues2: boolean[], RemoveDupes: boolean = false): boolean[] => sn.MergeBoolArray(ArrayValues1,  ArrayValues2,  RemoveDupes)

export const SliceBoolArray = (ArrayValues: boolean[], StartIndex: number, EndIndex: number = -1): boolean[] => sn.SliceBoolArray(ArrayValues,  StartIndex,  EndIndex)


// ##
// ## DEPRECATED: SKSE now provides their own variable sized arrays for these types - mirrored here for backwards compatibility.
// ##

export const FloatArray = (size: number, filler: number = 0.0): number[] => sn.FloatArray(size,  filler)
export const IntArray = (size: number, filler: number = 0): number[] => sn.IntArray(size,  filler)
export const BoolArray = (size: number, filler: boolean = false): boolean[] => sn.BoolArray(size,  filler)
export const StringArray = (size: number, filler: string = ""): string[] => sn.StringArray(size,  filler)
export const FormArray = (size: number, filler: Form | null | undefined = null): Form[] => sn.FormArray(size,  filler)
export const AliasArray = (size: number, filler: Alias | null | undefined = null): Alias[] => sn.AliasArray(size,  filler)

export const ResizeFloatArray = (ArrayValues: number[], toSize: number, filler: number = 0.0): number[] => sn.ResizeFloatArray(ArrayValues,  toSize,  filler)
export const ResizeIntArray = (ArrayValues: number[], toSize: number, filler: number = 0): number[] => sn.ResizeIntArray(ArrayValues,  toSize,  filler)
export const ResizeStringArray = (ArrayValues: string[], toSize: number, filler: string = ""): string[] => sn.ResizeStringArray(ArrayValues,  toSize,  filler)
export const ResizeFormArray = (ArrayValues: Form[], toSize: number, filler: Form | null | undefined = null): Form[] => sn.ResizeFormArray(ArrayValues,  toSize,  filler)
export const ResizeAliasArray = (ArrayValues: Alias[], toSize: number, filler: Alias | null | undefined = null): Alias[] => sn.ResizeAliasArray(ArrayValues,  toSize,  filler)
