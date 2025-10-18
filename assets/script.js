document.getElementById("process").addEventListener("click", () => {
  const text = document.getElementById("input").value.trim();
  if (!text) {
    alert("请输入日语句子！");
    return;
  }

  // 简单模拟分段 + 假名标注
  const result = text
    .replace(/。/g, "。\n")
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => `${line}（ふりがな）`)
    .join("\n\n");

  document.getElementById("output").textContent = result;
});
