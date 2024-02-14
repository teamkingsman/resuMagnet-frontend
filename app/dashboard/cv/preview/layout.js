import PrivateRoute from "@/Providers/PrivateRoute";
import TemplatesNav from "@/components/ChoosingTemplates/TemplatesNav";


const TemplateEditor = ({ children }) => {
    return (
        // <PrivateRoute>
            <div>
                {/* navbar goes here */}
                <TemplatesNav></TemplatesNav>
                <>
                {children}
                </>
            </div>
        // </PrivateRoute>
    );
};

export default TemplateEditor;