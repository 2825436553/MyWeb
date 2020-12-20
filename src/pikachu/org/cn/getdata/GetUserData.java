package pikachu.org.cn.getdata;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;




@WebServlet("/getuser")
public class GetUserData extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String mm = req.getParameter("mm");
        resp.setContentType("text/json;charset=UTF-8");
        resp.getWriter().write(mm==null?"{error:\"error->not data\"}":mm);

    }
}
