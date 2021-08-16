import pkg from 'pg'
const { Pool } = pkg

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    password: '7889',
    database: 'demodb'
})

const fetch = async (query, ...params) => {
    const client = await pool.connect()
    try {
        const { rows: [row] } = client.query(query, params.length ? params : null)
        return row
    } catch (error) {
        console.log(error)
    } finally {
        await client.release
    }
}

const fetchAll = async (query, ...params) => {
    const client = await pool.connect()
    try {
        const { rows } = client.query(query, params.length ? params : null)
        return rows
    } catch (error) {
        console.log(error)
    } finally {
        await client.release
    }
}

export default {
    fetch,
    fetchAll
}