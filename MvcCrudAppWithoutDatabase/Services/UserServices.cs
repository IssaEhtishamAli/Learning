using WebApplication1.Models;

namespace WebApplication1.Services
{
    public static class UserServices
    {
        public static List<Users> userList = new List<Users>();
        public static List<Users> GetAll()
        {
            return userList;
        }
        public static void Add(Users obj)
        {
            userList.Add(obj);
        }
        public static Users GetByID(int id)
        {
            Users dt = userList.Find(x => x.Id == id);
            return dt;
        }
        public static void Edit(int id , Users data)
        {
            Users dt=userList.Find(x => x.Id == id);
            dt.Email=data.Email;
            dt.Name = data.Name;
        }
        public static void Delete(int id)
        {
            Users dt = userList.Find(x => x.Id == id);
            userList.Remove(dt);
        }
    }
}
