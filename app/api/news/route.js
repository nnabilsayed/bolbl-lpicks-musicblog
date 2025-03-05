import { NextResponse } from "next/server";

export async function GET() {
  console.log("API Route: Starting news fetch");
  const apiKey = "88db5050daf3437f89ca1c351d6935a9";

  try {
    // First, try a direct fetch to NewsAPI to verify the API key
    const testUrl =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;
    console.log("API Route: Testing NewsAPI connection");

    const testResponse = await fetch(testUrl);
    const testData = await testResponse.json();
    console.log("API Route: Test response status:", testData.status);

    if (testData.status !== "ok") {
      throw new Error(testData.message || "NewsAPI key validation failed");
    }

    // If test passed, fetch the actual entertainment news
    const url = `https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=${apiKey}`;
    console.log("API Route: Fetching entertainment news");

    const response = await fetch(url);
    const data = await response.json();
    console.log("API Route: Entertainment news response status:", data.status);

    if (data.status === "ok" && Array.isArray(data.articles)) {
      console.log(
        "API Route: Successfully fetched",
        data.articles.length,
        "articles"
      );

      const articles = data.articles.map((article) => ({
        title: article.title || "No title",
        description: article.description || "No description available",
        url: article.url || "#",
        urlToImage: article.urlToImage || null,
        publishedAt: article.publishedAt || new Date().toISOString(),
        source: article.source?.name || "Unknown Source",
      }));

      return NextResponse.json(articles);
    } else {
      console.error("API Route: Invalid response from NewsAPI:", data);
      throw new Error(data.message || "Failed to fetch news data");
    }
  } catch (error) {
    console.error("API Route Error:", {
      name: error.name,
      message: error.message,
      stack: error.stack,
    });

    return NextResponse.json(
      { error: error.message || "Failed to fetch news" },
      { status: 500 }
    );
  }
}
