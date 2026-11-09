// Loads the content/data JSON into typed shapes. Static imports only; bundled by Vite.
import tuningJson from "../../content/data/tuning.json";
import sourcesJson from "../../content/data/sources.json";
import questionsJson from "../../content/data/questions.json";
import type { Question, SourceDef, Tuning } from "./types";

export const tuning = tuningJson as unknown as Tuning;
export const sourceList = sourcesJson.sources as SourceDef[];
export const catalog: Record<string, SourceDef> = Object.fromEntries(sourceList.map((s) => [s.id, s]));
export const questions = questionsJson.questions as Question[];
