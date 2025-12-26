export async function GET() {
  try {
    const repoOwner = "utsab-adhikari";
    const repoName = "java-docs";

    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/commits?per_page=1`;

    const headers = {
      Accept: "application/vnd.github+json",
      "User-Agent": "java-docs-site",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(url, { headers, cache: "no-store" });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch commits" }),
        { status: response.status, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const latest = Array.isArray(data) && data.length > 0 ? data[0] : null;

    if (!latest) {
      return new Response(
        JSON.stringify({ error: "No commits found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    const commit = latest.commit;
    const htmlUrl = latest.html_url;

    const payload = {
      message: commit?.message ?? "",
      date: commit?.committer?.date ?? commit?.author?.date ?? null,
      url: htmlUrl ?? null,
    };

    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching last updated info:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
