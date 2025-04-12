import projectsData from "@/data/projectsData";
import ProjectDetailsPage from "@/components/ProjectDetailsPage";

const ProjectPage = ({ params }) => {
  const { projectId } = params;

  // Search through all services to find the project
  let project = null;
  for (const service in projectsData) {
    project = projectsData[service].find(p => p.id === projectId);
    if (project) break;
  }

  if (!project) {
    return <div className="text-white p-10">Project not found</div>;
  }

  return <ProjectDetailsPage project={project} />;
};

export default ProjectPage;
