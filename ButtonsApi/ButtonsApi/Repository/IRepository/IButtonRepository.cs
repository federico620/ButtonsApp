using ButtonsApi.Models;

namespace ButtonsApi.Repository.IRepository
{
    public interface IButtonRepository : IRepository<Button>
    {
        Task<Button> Update(Button entity);
    }
}
