
import { useState } from "react";
import { UploadCloud, CheckCircle, AlertCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === "application/pdf" || 
          selectedFile.type === "application/msword" || 
          selectedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        setFile(selectedFile);
        setUploadStatus("idle");
      } else {
        toast.error("Please upload a PDF or Word document");
      }
    }
  };

  const handleUpload = () => {
    if (!file) {
      toast.error("Please select a file to upload");
      return;
    }

    setUploading(true);
    setUploadStatus("uploading");
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          setUploadStatus("success");
          toast.success("Resume uploaded successfully!");
          return 100;
        }
        return prev + 5;
      });
    }, 200);
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-career-purple">Upload Your Resume</CardTitle>
        <CardDescription className="text-center">
          Upload your resume for AI analysis. We support PDF and Word formats.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div 
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            uploadStatus === "success" 
              ? "border-green-500 bg-green-50" 
              : uploadStatus === "error" 
                ? "border-red-500 bg-red-50" 
                : "border-gray-300 hover:border-career-purple hover:bg-career-softPurple/20"
          }`}
          onClick={() => document.getElementById("resume-upload")?.click()}
        >
          <input
            id="resume-upload"
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            disabled={uploading}
          />
          
          {uploadStatus === "success" ? (
            <div className="flex flex-col items-center space-y-3">
              <CheckCircle className="h-12 w-12 text-green-500" />
              <p className="font-medium text-green-700">Resume uploaded successfully!</p>
              <p className="text-sm text-gray-500">{file?.name}</p>
            </div>
          ) : uploadStatus === "error" ? (
            <div className="flex flex-col items-center space-y-3">
              <AlertCircle className="h-12 w-12 text-red-500" />
              <p className="font-medium text-red-700">Error uploading resume</p>
              <p className="text-sm text-gray-500">Please try again</p>
            </div>
          ) : file ? (
            <div className="flex flex-col items-center space-y-3">
              <FileText className="h-12 w-12 text-career-purple" />
              <p className="font-medium">{file.name}</p>
              <p className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-3">
              <UploadCloud className="h-12 w-12 text-gray-400" />
              <p className="font-medium">Drag and drop your resume here or click to browse</p>
              <p className="text-sm text-gray-500">Supports PDF, DOC, DOCX (Max 5MB)</p>
            </div>
          )}

          {uploadStatus === "uploading" && (
            <div className="mt-4 space-y-2">
              <Progress value={uploadProgress} className="h-2" />
              <p className="text-sm text-gray-500">Uploading... {uploadProgress}%</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-career-purple hover:bg-career-lightPurple"
          onClick={handleUpload}
          disabled={!file || uploading || uploadStatus === "success"}
        >
          {uploading ? "Uploading..." : uploadStatus === "success" ? "Uploaded" : "Upload Resume"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResumeUpload;
