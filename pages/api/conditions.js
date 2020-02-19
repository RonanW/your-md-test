import { conditions } from '../../conditions.json';

export default (req, res) => {
  setTimeout(() => {
    res.status(200).json(conditions);
  }, 2000)
};