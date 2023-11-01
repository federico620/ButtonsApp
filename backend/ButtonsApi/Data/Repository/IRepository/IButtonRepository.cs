using ButtonsApi.Models;

namespace ButtonsApi.Data.Repository.IRepository
{
    public interface IButtonRepository : IRepository<Button>
    {
        Task<Button> Update(Button entity);
    }
}
