using Google.Docs.Clone.Repository.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Google.Docs.Clone.API.Data
{
    public class DocumentRepository : IDocumentRepository
    {
        private readonly ApplicationDBContext _dbContext;

        public DocumentRepository(ApplicationDBContext dbContext)
        {
            _dbContext = dbContext;
        }
       
        public async Task<Document> GetByIdAsync(string docId)
        {
            return await _dbContext.Documents.FirstOrDefaultAsync(x => x.DocId == docId);
        }

        public async Task<IEnumerable<Document>> GetAllAsync()
        {
            return await _dbContext.Documents.ToListAsync();
        }

        public async Task<bool> DeleteAsync(string docId)
        {
            var doc = await _dbContext.Documents.FirstOrDefaultAsync(x => x.DocId == docId);
            _dbContext.Documents.Remove(doc);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteAllAsync()
        {
            _dbContext.Documents.RemoveRange(_dbContext.Documents);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> SaveAsync(Document model)
        {
            var existingDoc = await _dbContext.Documents.FirstOrDefaultAsync(x => x.DocId == model.DocId);

            if (existingDoc != null)
            {
                existingDoc.Content = model.Content;
                existingDoc.DocumentName = model.DocumentName;
                _dbContext.Documents.Update(existingDoc);
            }
            else
            {
                await _dbContext.Documents.AddAsync(model);
            }

            try
            {
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<bool> SaveNameAsync(Document model)
        {
            var existingDoc = await _dbContext.Documents.FirstOrDefaultAsync(x => x.DocId == model.DocId);

            if (existingDoc == null)
            {
                return false;
            }

            try
            {
                existingDoc.DocumentName = model.DocumentName;
                _dbContext.Documents.Update(existingDoc);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}