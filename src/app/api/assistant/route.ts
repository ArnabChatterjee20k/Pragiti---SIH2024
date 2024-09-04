export const revalidate = 0;

import { connect } from "@/dbconfig/db";
import Task from "@/models/Tasks";
import { NextRequest, NextResponse } from "next/server";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import { LLMChain } from "langchain/chains";

connect();

export async function GET() {
  try {
    const tasks = await Task.find({}); // Populate head_ids to get detailed info
    const collision = await ai(tasks);
    return NextResponse.json({ collision });
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      {
        message: "Error fetching tasks",
      },
      { status: 500 }
    );
  }
}

async function ai(data: any) {
  const apiKey = "AIzaSyAgHpbM2nVl1PavlwUqf10bV7j03GgzFXg";

  const template = `
  I will give you a list of data
  Ex of data
  {{${JSON.stringify(data)}}}
  To handle task prioritization where certain tasks depend on the completion of others, such as road construction waiting for the installation of gas pipelines, water pipelines, and electricity underground lines, implement a Dependency-Based Task Scheduling system.
  output format
  json
  {{
  id:task_id,
  dependent_on : [task_id]
  }}
  Dont output any other text
  if they are not dependent then give {}`;

  const promptTemplate = new PromptTemplate({
    template,
    inputVariables: ["data"],
  });
  const geminiModel = new ChatGoogleGenerativeAI({
    modelName: "gemini-pro",
    apiKey: apiKey,
  });

  const llmChain = new LLMChain({
    llm: geminiModel,
    prompt: promptTemplate,
  });

  llmChain.invoke({ data });
}
