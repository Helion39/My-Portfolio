import { projects } from "@/data/projects";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const ProjectTableSection = () => {
  return (
    <section id="project-table" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4" style={{backdropFilter: 'blur(8px)', background: 'rgba(255,255,255,0.2)', borderRadius: '1rem', boxShadow: '0 4px 30px rgba(0,0,0,0.1)', border: '1px solid rgba(255,255,255,0.3)'}}>Projects</h2>
        </div>
        <Card className="backdrop-blur-lg bg-white/30 border border-white/30 shadow-xl rounded-2xl p-6">
          <Table className="min-w-full divide-y divide-gray-200">
            <TableHeader>
              <TableRow className="bg-white/20">
                <TableCell className="font-semibold">Title</TableCell>
                <TableCell className="font-semibold">Category</TableCell>
                <TableCell className="font-semibold">Description</TableCell>
                <TableCell className="font-semibold">Technologies</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id} className="hover:bg-white/40 transition">
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell>{project.category}</TableCell>
                  <TableCell>{project.description}</TableCell>
                  <TableCell>{project.technologies.join(", ")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </section>
  );
};

export default ProjectTableSection;
