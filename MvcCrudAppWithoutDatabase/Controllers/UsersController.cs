using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    public class UsersController : Controller
    {
        public IActionResult Index()
        {
            List<Users> list= UserServices.GetAll();
            return View(list);
        }
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Users ob)
        {
            UserServices.Add(ob);
            return RedirectToAction("Index");
        }

        public IActionResult Edit(int id)
        {
            Users data = UserServices.GetByID(id);
            return View(data);
        }
        [HttpPost]
        public IActionResult Edit(int id, Users obj)
        {
            UserServices.Edit(id, obj);
            return RedirectToAction("Index");
        }
        public IActionResult Delete(int id)
        {
            UserServices.Delete(id);
            return RedirectToAction("Index");
        }
    }
}
