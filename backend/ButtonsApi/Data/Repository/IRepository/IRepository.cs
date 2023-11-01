using System.Linq.Expressions;

namespace ButtonsApi.Data.Repository.IRepository
{
    public interface IRepository<T> where T : class
    {
        Task Create(T entity);
        Task Delete(T entity);
        Task<T> Get(Expression<Func<T, bool>>? filter = null);
        Task<List<T>> GetAll(Expression<Func<T,bool>>? filter = null);
        Task Save ();
    }
}
