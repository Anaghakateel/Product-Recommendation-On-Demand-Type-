import fs from "fs";
import path from "path";

const projectRoot = process.cwd();
const sourceDir = path.resolve(projectRoot, "prototype");
const outputDir = path.resolve(projectRoot, "dist");

async function removeDirIfExists(targetPath) {
  await fs.promises.rm(targetPath, { recursive: true, force: true });
}

async function ensureDir(targetPath) {
  await fs.promises.mkdir(targetPath, { recursive: true });
}

async function copyFile(src, dest) {
  await ensureDir(path.dirname(dest));
  await fs.promises.copyFile(src, dest);
}

async function copyDirectoryRecursive(srcDir, destDir) {
  const entries = await fs.promises.readdir(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    // Skip common junk files
    if (entry.name === ".DS_Store") continue;

    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      await copyDirectoryRecursive(srcPath, destPath);
    } else if (entry.isFile()) {
      await copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  // Basic validations
  try {
    const stat = await fs.promises.stat(sourceDir);
    if (!stat.isDirectory()) {
      throw new Error(`Source is not a directory: ${sourceDir}`);
    }
  } catch (err) {
    console.error(`Source directory not found: ${sourceDir}`);
    console.error(err?.message || err);
    process.exit(1);
  }

  try {
    await removeDirIfExists(outputDir);
    await ensureDir(outputDir);
    await copyDirectoryRecursive(sourceDir, outputDir);
    // Confirm index.html exists post-copy
    await fs.promises.access(path.join(outputDir, "index.html"));
    console.log(`Build successful. Output: ${outputDir}`);
  } catch (err) {
    console.error("Build failed.");
    console.error(err?.stack || err?.message || err);
    process.exit(1);
  }
}

main();

